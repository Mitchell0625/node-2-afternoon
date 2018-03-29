module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .create_product()
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_product()
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .update_product()
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_product()
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  }
};
