const request = require("request");

module.exports = {
  async findAll(req, res) {
    const shortid = req.query.shortid;
    const preview = JSON.parse(req.query.preview);

    // shortid: "7o7hE~i",
    // preview: true,

    const data = {
      number: "11111",
      seller: {
        name: "Next Step Webs, Inc.",
        road: "12345 Sunny Road",
        country: "Sunnyville, TX 12345",
      },
      buyer: {
        name: "Acme Corp.",
        road: "16 Johnson Road",
        country: "Paris, France 8060",
      },
      items: [
        {
          name: "Website design",
          price: 300,
        },
      ],
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
