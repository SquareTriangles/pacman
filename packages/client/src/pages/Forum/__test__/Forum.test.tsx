import '@testing-library/jest-dom'
import { renderMassageLsit } from '../Forum'

const tempData = [{
  body: 'my body 1',
  questionCommentId: null,
  topic: 'my topic 1',
  owner: 'user 1',
  User: {
    firstName: 'first',
    lastName: 'first',
    avatar:  null,
    email: 'first@ya.tu',
    login: 'first',
  },
  createdAt: 'Tue Nov 15 2022 22:48:58 GMT+0300',
  updatedAt: 'Tue Nov 15 2022 22:48:58 GMT+0300',
},
{
  body: 'my body 2',
  questionCommentId: null,
  topic: 'my topic 2',
  owner: 'user 2',
  User: {
    firstName: 'second',
    lastName: 'second',
    avatar:  null,
    email: 'second@ya.tu',
    login: 'second',
  },
  createdAt: 'Tue Nov 15 2022 22:48:58 GMT+0300',
  updatedAt: 'Tue Nov 15 2022 22:48:58 GMT+0300',
}];

describe('Генерируем сообщения для форума', () => {
  test('Проверяем модель данных', () => {

    const outMessage = [
      { user: { name: 'first', photo: '' }, date: 'Tue Nov 15 2022 22:48:58 GMT+0300', body:  'my body 1' },
      { user: { name: 'second', photo: '' }, date: 'Tue Nov 15 2022 22:48:58 GMT+0300', body:  'my body 2' },
    ];
    expect(renderMassageLsit(tempData)).toEqual(outMessage);
  });
}); 
