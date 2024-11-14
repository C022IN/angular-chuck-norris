import { ChuckNorrisJoke } from './joke.model';

describe('ChuckNorrisJoke', () => {
  it('should allow valid joke data', () => {
    const jokeData: ChuckNorrisJoke = {
      icon_url: 'https://example.com/icon.png',
      id: '123abc',
      url: 'https://api.chucknorris.io/jokes/123abc',
      value: 'This is a test joke.'
    };

    expect(jokeData).toBeTruthy();
    expect(jokeData.icon_url).toBe('https://example.com/icon.png');
    expect(jokeData.id).toBe('123abc');
    expect(jokeData.url).toBe('https://api.chucknorris.io/jokes/123abc');
    expect(jokeData.value).toBe('This is a test joke.');
  });
});
