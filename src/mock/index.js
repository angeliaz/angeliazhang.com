import Mock from 'mockjs';
import task from './task';
import article from './article';

const mocks = [
  task,
  article
]

mocks.map(item => {
  Mock.mock(item.url, item.fakeFn);
});
