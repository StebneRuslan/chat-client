import { MessageModel } from './message/message.model';

export class MessagesListModel {
  public messages: MessageModel[] = [
    {
      id: '1',
      text: 'test text',
      user: {
        _id: '1',
        username: 'test1',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '2',
      text: 'test text',
      user: {
        _id: '1',
        username: 'test1',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '3',
      text: 'test text',
      user: {
        _id: '3',
        username: 'test3',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '4',
      text: 'test text',
      user: {
        _id: '4',
        username: 'test4',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '5',
      text: 'test text',
      user: {
        _id: '5',
        username: 'test5',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '6',
      text: 'test text',
      user: {
        _id: '1',
        username: 'test1',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '7',
      text: 'test text',
      user: {
        _id: '1',
        username: 'test1',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '8',
      text: 'test text',
      user: {
        _id: '3',
        username: 'test3',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '9',
      text: 'test text',
      user: {
        _id: '4',
        username: 'test4',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    }, {
      id: '10',
      text: 'test text',
      user: {
        _id: '5',
        username: 'test5',
        avatarUrl: '',
        selected: false
      },
      date: new Date().toISOString(),
      selected: false,
      hover: false
    },
  ];
}
