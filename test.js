import test from 'ava';
import fn from './';

test('test valid hashes', t => {
  let testHashes = [
    'a50199947bad94ef05b35b04ae9b4895',
    'c52aa11424524dcc59d3502354257dd6',
    '56b708d44ac935eb048be1bf67faeb50'
  ];

  t.plan(3);
  testHashes.map(hash => t.true(fn(hash)));
});

test('test invalid hashes', t => {
  let testHashesError = [
    'err199947bad94ef05b35b04ae9b489z',
    'erraa11424524dcc59d3502354257ddz',
    'err708d44ac935eb048be1bf67faeb5z',
    'err708d44ac935eb048be1bf67faeb5zlooonger',
    'err708d44ac935eb048be1bf67',
    'ANY STRING'
  ];

  t.plan(6);
  testHashesError.map(hash => t.false(fn(hash)));
});
