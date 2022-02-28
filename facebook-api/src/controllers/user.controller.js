import { ErrorNotFound } from "../errors/NotFound.error";
import * as ProfileModel from '../models/profile.model';

export const createOne = async (request, response) => {
  const { user } = request;
  const { firstName, lastName } = request.body;

  const profile = await ProfileModel.createOne({
    firstName,
    lastName,
    userId: user.id,
  });

  response.status(201).json({ profile });
}



export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);

  await ProfileModel.deleteOne(id);

  response.status(204).end();
}