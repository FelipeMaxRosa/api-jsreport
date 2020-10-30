const request = require("request");

module.exports = {
  async findAll(req, res) {
    const shortid = req.query.shortid;
    const preview = JSON.parse(req.query.preview);

    // shortid: "7o7hE~i",
    // preview: true,

    const data = {
  "data": {
    "breach_month": 10,
    "breach_trends": [
      {
        "breaches": 11,
        "client_id": 21314,
        "month": 8,
        "passwords": "1",
        "year": 2020
      },
      {
        "breaches": 4,
        "client_id": 21314,
        "month": 10,
        "passwords": "0",
        "year": 2020
      }
    ],
    "breach_trends_global": [
      {
        "breaches": 33809,
        "domains_affected": 156675629,
        "month": 4,
        "year": 2020
      },
      {
        "breaches": 27301,
        "domains_affected": 176675629,
        "month": 5,
        "year": 2020
      },
      {
        "breaches": 5,
        "domains_affected": 16726559,
        "month": 6,
        "year": 2020
      },
      {
        "breaches": 24388,
        "domains_affected": 630572736,
        "month": 7,
        "year": 2020
      },
      {
        "breaches": 48292,
        "domains_affected": 77498897,
        "month": 8,
        "year": 2020
      },
      {
        "breaches": 1295057,
        "domains_affected": 145945495,
        "month": 9,
        "year": 2020
      }
    ],
    "breach_year": 2020,
    "breaches": 48292,
    "breaches_total": 18869815,
    "client_breaches": 15,
    "client_exposed_passwords": 15,
    "client_id": 21314,
    "clientname": "Chesapeake Potomac Regional Cancer Center",
    "exposed_passwords": 1384,
    "exposed_passwords_total": 1135237,
    "industries": [
      {
        "breaches": "864",
        "industry": "Business and Economy"
      },
      {
        "breaches": "268700",
        "industry": "Not Available"
      }
    ],
    "partnername": "HIPAA Secure Now!",
    "pcode": "e0a8e",
    "results": [
      {
        "email": "voduyhieu1987@yahoo.com",
        "ess": 300,
        "info": [
          {
            "breach_title": "The 2844 Collection - nexmods.com",
            "breaches": 2,
            "client_id": 21314,
            "import_date": "2019-12-27 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "The 2844 Collection - portal.net",
            "breaches": 2,
            "client_id": 21314,
            "import_date": "2019-12-26 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "The 2844 Collection - criptoname.net",
            "breaches": 2,
            "client_id": 21314,
            "import_date": "2019-12-14 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "pemiblanc.com combo list",
            "breaches": 2,
            "client_id": 21314,
            "import_date": "2018-08-02 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "ExploitIN 800M - Part 53",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2020-06-20 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "Unknown 16 Million",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2020-04-21 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "very large credential dump",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2016-08-01 00:00:00",
            "info_exposed": ""
          },
          {
            "breach_title": "MySpace credentials dump",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2016-06-01 00:00:00",
            "info_exposed": ""
          }
        ]
      },
      {
        "email": "hanvo1990@gmail.com",
        "ess": 340,
        "info": [
          {
            "breach_title": "2019 Houzz Dump 2.0",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2019-10-18 00:00:00",
            "info_exposed": ""
          }
        ]
      },
      {
        "email": "parsonclarissa@yahoo.com",
        "ess": 380,
        "info": [
          {
            "breach_title": "edmodo.com database dump",
            "breaches": 1,
            "client_id": 21314,
            "import_date": "2017-08-07 00:00:00",
            "info_exposed": ""
          }
        ]
      }
    ],
    "risk": "Low"
  }
  };

    const json = {
      template: {
        shortid,
      },
      options: {
        preview,
      },
      data,
    };

    const options = {
      uri: "http://localhost:8001/api/report",
      method: "POST",
      json,
    };

    try {
      await request(options).pipe(res);

      //res.status(200).send({ success: "findAll" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async findOne(req, res) {
    try {
      res.status(200).send({ success: "findOne" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async create(req, res) {
    try {
      res.status(200).send({ success: "create" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      res.status(200).send({ success: "update" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async remove(req, res) {
    try {
      res.status(200).send({ success: "remove" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async removeAll(req, res) {
    try {
      res.send({
        message: `removeAll`,
      });
    } catch (error) {
      res.status(500).send({ message: "Error deleting all users!" });
    }
  },
};
