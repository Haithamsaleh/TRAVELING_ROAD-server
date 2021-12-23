const meetupModel = require("./../../db/models/meetup");
// const likeModel = require("./../../db/models/like");

const createMeetup = (req, res) => {
    const {_id} = req.params
    const {titel,desc,img} = req.body;

    const newMeetup = new meetupModel({
      titel: titel,
      desc: desc,
      img:img,
        
    });
    newMeetup
    .save()
    .then((result) => {
        res.status(201).json(result);

    })
    .catch((err) => {
        res.status(400).json(err);
    })
}

const getMeetsup = (req, res) => {
    meetupModel
       .find({isdel:false})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
};

const getMeetupById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  meetupModel
    .findById(id)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateImgMeetup = (req, res) => {
  const { id } = req.params;
  const { img } = req.body;
  console.log(id);
  meetupModel
    .findByIdAndUpdate(id, { img }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateDescMeetup = (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;
  console.log(id);
  meetupModel
    .findByIdAndUpdate(id, { $set: { desc } }, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateMeetupTitel = (req, res) => {
  const { id } = req.params;
  const {titel} = req.body;
  console.log(id);
  meetupModel
    .findByIdAndUpdate(id,{$set: { titel }}, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedMeetupByUser = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
    .findByIdAndUpdate(id,{ isdel: true}, {isclose: true}, { new: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deletedMeetup = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
    .findByIdAndUpdate(id, { isdel: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const closeMeetup = (req, res) => {
  const { id } = req.params;

  console.log(id);
  meetupModel
    .findByIdAndUpdate(id, { isclose: true })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  }
module.exports = {
  createMeetup,
  getMeetsup,
  getMeetupById,
  updateMeetupTitel,
  updateImgMeetup,
  updateDescMeetup,
  deletedMeetupByUser,
  deletedMeetup,
  closeMeetup,
};
