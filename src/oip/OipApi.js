import axios from "axios";
import { Logger } from "loglevel-colored-prefix";
import { config } from "../ddx.config";

class OipApi {
  constructor(loglevel = "debug") {
    this.base = config.oip.daemonApiUrl;
    this.log = new Logger(loglevel);
  }

  getRecords(template = config.oip.baseTemplate) {
    const log = this.log.getLogger("OipApi::getRecords");
    const searchForTemplateBase = `_exists_:record.details.${template}`;
    let url = `${config.oip.daemonApiUrl}record/search?limit=${config.oip.perPage}&q=${searchForTemplateBase}`;
    const moreTemplates = config.oip.requiredTemplates.map(
      template => `_exists_:record.details.${template}`
    );
    if (moreTemplates.length) {
      url += ` AND ${moreTemplates.join(" AND ")}`;
    }
    const filterByAddresses = config.oip.addressesWhiteList.map(
      address => `meta.signed_by:${address}`
    );
    if (filterByAddresses.length) {
      url += ` AND ${filterByAddresses.join(" AND ")}`;
    }
    log.debug(`calling URL: ${url}`);
    return axios.get(url).then(res => res.data.results);
  }
}

export { OipApi };
