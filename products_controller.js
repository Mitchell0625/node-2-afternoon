module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    // const { params } = req;

    dbInstance
      .read_product([id])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(e => {
        console.log(e);
        res.status(500).send();
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(e => {
        // console.log(e);
        res.status(500).send();
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // const id = req.params;
    // const { desc } = req.query;

    dbInstance
      .update_product([req.params.id, req.query.desc])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // const { id } = req.params;
    dbInstance
      .delete_product([req.params.id])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  }
};
