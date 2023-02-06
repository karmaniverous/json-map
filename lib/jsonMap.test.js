/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();
const expect = chai.expect;

// subject imports
import { jsonMap } from './jsonMap.js';

describe('jsonMap', function () {
  it('fails when default is null', function () {
    expect(() => jsonMap({ default: null })).to.throw('invalid input default');
  });

  it('fails when map is null', function () {
    expect(() => jsonMap({ map: null })).to.throw('invalid input map');
  });

  it('fails when map property is null', function () {
    expect(() => jsonMap({ map: { foo: null } })).to.throw('invalid input map');
  });

  it('fails when key is null', function () {
    expect(() => jsonMap({}, null)).to.throw('invalid key');
  });

  it('returns empty object when input & key undefined', function () {
    jsonMap().should.deep.equal({});
  });

  it('returns empty object when default, map & key undefined', function () {
    jsonMap().should.deep.equal({});
  });

  it('returns default when map & key undefined', function () {
    jsonMap({ default: { foo: 'bar' } }).should.deep.equal({ foo: 'bar' });
  });

  it('returns default when key unknown', function () {
    jsonMap(
      { default: { foo: 'bar' }, map: { tick: { food: 'bard' } } },
      'tock'
    ).should.deep.equal({ foo: 'bar' });
  });

  it('returns superposition when key known', function () {
    jsonMap(
      { default: { foo: 'bar' }, map: { tick: { food: 'bard' } } },
      'tick'
    ).should.deep.equal({ foo: 'bar', food: 'bard' });
  });

  it('returns override when key known', function () {
    jsonMap(
      { default: { foo: 'bar' }, map: { tick: { foo: 'bard' } } },
      'tick'
    ).should.deep.equal({ foo: 'bard' });
  });

  it('returns override with alt default & map tokens', function () {
    jsonMap(
      { default2: { foo: 'bar' }, map2: { tick: { foo: 'bard' } } },
      'tick',
      'default2',
      'map2'
    ).should.deep.equal({ foo: 'bard' });
  });
});
