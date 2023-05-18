import express from "express";
import { UserCreateRequestType, UserDeleteRequestType, UserUpdateRequestType } from "../../models/userRequest";
import { User } from "../../../../../domain/model/user/user";
import { userId, users } from "../../../../../app";

export const userRouter = express.Router();

// create user
userRouter.post('/', (req: express.Request, res: express.Response) => {
  const requestBody: UserCreateRequestType = req.body;
  console.log('====create user====');

  if (!requestBody.email)
    res.status(400).send({ message: 'you should set email.' });
  if (!requestBody.name)
    res.status(400).send({ message: 'you should set name.' });
  if (!requestBody.password)
    res.status(400).send({ message: 'you should set password.' });

  // Mapに追加
  let user = new User(requestBody);
  let id = userId.nextId();
  users.set(id, user);

  res.send({ id: id, user: user });
})

// get users
userRouter.get('/', (req, res) => {
  console.log('====get users====');
  res.send(Array.from(users));
})

// get user by id
userRouter.get('/:id', (req, res) => {
  console.log('====get user====');
  let id = Number(req.params.id);
  let user = users.get(id);
  if (user === undefined)
    return res.status(404).send({ message: "user doesn't exist" });

  res.send({ id, user });
})

// update user
userRouter.put('/:id', (req, res) => {
  console.log('====update user====')
  const requestBody: UserUpdateRequestType = req.body;

  if (!requestBody.email)
    res.status(400).send({ message: 'you should set email.' });
  if (!requestBody.name)
    res.status(400).send({ message: 'you should set name.' });
  if (!requestBody.password)
    res.status(400).send({ message: 'you should set password.' });
  if (!requestBody.newPassword)
    res.status(400).send({ message: 'you should set new password.' });

  let id = Number(req.params.id);

  let user = users.get(id);
  if (user === undefined)
    return res.status(404).send({ message: "user doesn't exist" });

  if (user.getPassword() != requestBody.password)
    return res.status(400).send({ message: 'wrong password' });

  let updateUser = new User({ name: requestBody.name, email: requestBody.email, password: requestBody.newPassword })
  users.set(id, updateUser);

  user = users.get(id);

  res.send({ id, user });
})

// delete user by id
userRouter.delete('/:id', (req, res) => {
  console.log('====delete user====');
  const requestBody: UserDeleteRequestType = req.body;
  if (!requestBody.password)
    res.status(400).send({ message: 'you should set password.' });

  let id = Number(req.params.id);

  let user = users.get(id);
  if (user === undefined)
    return res.status(404).send({ message: "user doesn't exist" });

  if (user.getPassword() != requestBody.password)
    return res.status(400).send({ message: 'wrong password' });


  users.delete(id);

  res.send('deleted');
})