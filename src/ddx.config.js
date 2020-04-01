const config = {
  title: "DDX template",
  subtitle: "Edit here to add the subtitle you want",
  ipfs: {
    apiUrl: "https://gateway.ipfs.io/ipfs/"
  },
  oip: {
    perPage: 40,
    daemonApiUrl: "https://api.oip.io/oip/o5/",
    baseTemplate: "tmpl_5D503849",
    requiredTemplates: ["tmpl_66089C48"],
    addressesWhiteList: ["F6R95XtThjfDr2uGgPPAyG3QS2749osmdC"]
  },
  cardInfo: {
    title: {
      tmpl: "tmpl_66089C48",
      name: "title"
    },
    description: {
      tmpl: "tmpl_66089C48",
      name: "description"
    },
    thumbnail: {
      tmpl: "tmpl_5D503849",
      name: "thumbnailFilename"
    },
    addressDirectory: {
      tmpl: "tmpl_5D503849",
      name: "addressDirectory"
    }
  }
};

export { config };
