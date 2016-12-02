import { expect } from '../test_helper';
import commentReducer from "../../src/reducers/reducer_comments"
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'my comment'};
    expect(commentReducer([], action)).to.eql(['my comment']);
  });
}); 