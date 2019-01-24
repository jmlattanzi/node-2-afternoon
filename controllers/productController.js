module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')

        db.create_product([
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.image_url,
        ])
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                res.status(500).json('Error fetching data')
                console.log('\x1b[31mERROR: ', err)
            })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')

        db.read_product(req.params.product_id)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                res.status(500).json('Error fetching data')
                console.log('\x1b[31mERROR: ', err)
            })
    },

    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                res.status(500).json('Error fetching data')
                console.log('\x1b[31mERROR: ', err)
            })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        console.log(req.query.desc)

        db.update_product(req.params.product_id, req.query.desc)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                res.status(500).json('Error fetching data')
                console.log('\x1b[31mERROR: ', err)
            })
    },

    delete: (req, res) => {
        const db = req.app.get('db')

        db.delete_product(req.params.product_id)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                res.status(500).json('Error fetching data')
                console.log('\x1b[31mERROR: ', err)
            })
    },
}
