const fs = require("fs"),
  path = require("path");

let storage = "../data/storage.json",
  dataBasePath = path.join(__dirname, storage);

const isExist = (someItems, dataBase) => {
  for (let item of dataBase) {
    if (
      item.name === storage.name &&
      item.band === storage.band &&
      item.instrument === storage.instrument
    ) {
      return true;
    }
    return false;
  }
};

const addData = item => {
  fs.writeFile(dataBasePath, JSON.stringify(item), err => {
    if (err) {
      return res.status(500);
    }
  });
};

const addNew = (req, res) => {
  fs.readFile(dataBasePath, (err, data) => {
    const dataBase = JSON.parse(data);
    const newArtist = {
        id: dataBase.length + 1,
        name: req.body.name,
        band: req.body.band,
        instrument: req.body.instrument
      };

    if (err) {
      return res.status(500);
    }
    if (!req.body.name || !req.body.band || !req.body.instrument) {
      return res.sendStatus(400);
    }

    if (isExist(req.body, dataBase)) {
      return res.status(409).send({ message: "Musician already exist." });
    }

    dataBase.push(newArtist);
    addData(dataBase);
    res.status(201).send(newArtist);
  });
};

const getAll = (req, res) => {
  fs.readFile(dataBasePath, (err, data) => {
    const dataBase = JSON.parse(data);

    if (err) {
      return res.status(500);
    }

    res.status(200).send(dataBase);
  });
};

const getById = (req, res) => {
  fs.readFile(dataBasePath, (err, data) => {
    const dataBase = JSON.parse(data);
    let artist = dataBase.find(elem => elem.id === Number(req.params.id));

    if (err) {
      res.status(404).send({
        message: "Cannot read the file."
      });
    }

    if (artist) {
      res.status(200).send(artist);
    } else {
      res.status(404).send({
        message: `We could not find the musician`
      });
    }
  });
};

const put = (req,res) => {
    let artist = storage.find((item) => {
        return item.id === Number(req.params.id);
        });
    if(!artist){
        res.send("Not found").status(404);
    }
        artist.name =req.body.name;
        artist.band =req.body.band;
        artist.instrument =req.body.instrument;

    res.send(star).status(200);
};

const removeById = (req, res) => {
    fs.readFile(dataBasePath, (err, data) => {
        if (err) {
            return res.status(500);
        }

        const dataBase = JSON.parse(data);
        const artist = storage.find(item => item.id === Number(req.params.id));

        const index = dataBase.indexOf(artist);
        if (!artist) {
            res.status(404).send('There is no artist with this ID');
            return;
        }
        dataBase.splice(index, 1);
        addData(dataBase);
        res.status(200).send({message: 'Artist has been removed from playlist.'});
    });
};

module.exports = {
    addNew: addNew,
    getAll: getAll,
    getById: getById,
    put: put,
    removeById: removeById
};