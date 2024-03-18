import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useFetchJobs } from '../services/fetchJobs';
import { JobData } from '../dtos/jobDto';

const mockAxios = new MockAdapter(axios);

describe('useFetchJobs', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should fetch jobs successfully', async () => {
    const responseData = [
      { id: 1, title: 'Job 1' },
      { id: 2, title: 'Job 2' },
    ];
    mockAxios.onGet('http://localhost:5162/').reply(200, responseData);

    const { result, waitForNextUpdate }: RenderHookResult<
      void,
      [JobData[] | null, boolean, string | null]
    > = renderHook(() => useFetchJobs());

    await waitForNextUpdate(); // wait for useEffect to execute

    const [data, loading, error] = result.current;

    expect(data).toEqual(responseData);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('should handle API error', async () => {
    const errorMessage = "Request failed with status code 500";
    mockAxios.onGet('http://localhost:5162/').reply(500);

    const { result, waitForNextUpdate }: RenderHookResult<
      void,
      [JobData[] | null, boolean, string | null]
    > = renderHook(() => useFetchJobs());

    await waitForNextUpdate(); // wait for useEffect to execute

    const [data, loading, error] = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(errorMessage);
  });
});
