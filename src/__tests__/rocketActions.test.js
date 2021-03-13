import { shouldFetchRocket } from '../actions/RocketActions';

describe('Rockets', () => {
  it('should fetch rocket', () => {
    const shouldFetch = shouldFetchRocket('mockId', {});
    expect(shouldFetch).toEqual(true);
  });
  it('should fetch rocket', () => {
    const shouldFetch = shouldFetchRocket('mockId', {differentId: 'details'});
    expect(shouldFetch).toEqual(true);
  });
  it('should not fetch rocket', () => {
    const shouldFetch = shouldFetchRocket('mockId', {mockId: 'details'});
    expect(shouldFetch).toEqual(false);
  });
});