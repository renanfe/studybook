const userModel = require('../../models/user');
const mongoose = require('mongoose');

describe('users unit test', () => {

  const user1 = {
    'name': 'renan',
    'lastname': 'felipe teixeira',
    'email': 'renan@renan.com'
  };

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/estudos2', {useNewUrlParser: true});
    await userModel.deleteMany({});
  });

  afterAll(async () => {
    //await userModel.deleteMany({});
  });

  it('should create an user', async () => {
    await userModel.create(user1)
    .then(doc => {
      let user = doc.toObject();
      expect(user).not.toBeNull();
    })
    .catch();
  });

  it('should return an user', async () => {
    await userModel.findOne({ 'name': user1.name })
      .then(doc => {
        let user = doc.toObject();
        expect(user.name).toEqual(user1.name);
      })
      .catch();
  });

  it('should update an user', async () => {
    let lastname = 'teixera';
    await userModel.findOneAndUpdate({ 'name': user1.name }, { 'lastname': lastname }, { new: true })
    .then(doc => {
      let user = doc.toObject();
      expect(user.lastname).toEqual(lastname);
    })
    .catch();
  });

  it('should remove an user', async () => {
    let lastname = 'teixera';
    await userModel.deleteOne({ 'name': user1.name })
    .then(async doc => {
      await userModel.findOne({ 'name': user1.name })
      .then(doc => {
        expect(doc).toBeNull();
      })
      .catch();
    })
    .catch();
  });

});