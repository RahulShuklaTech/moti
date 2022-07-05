import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const $categories$$categoriesId$$entriesGET = (
  Constants,
  { categories_id }
) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories/${
      categories_id ?? ''
    }/entries`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const use$categories$$categoriesId$$entriesGET = ({ categories_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories/${
      categories_id ?? ''
    }/entries`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const Fetch$categories$$categoriesId$$entriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
  categories_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories/${
      categories_id ?? ''
    }/entries`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetch$categories$$categoriesId$$entries: refetch,
  });
};

export const checkPaths1GET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/check_paths_1`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCheckPaths1GET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['exercises', args], () => checkPaths1GET(Constants, args), {
    refetchInterval,
  });
};

export const FetchCheckPaths1GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useCheckPaths1GET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchCheckPaths1: refetch });
};

export const countEntriesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/count_entries`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCountEntriesGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/count_entries`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchCountEntriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/count_entries`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchCountEntries: refetch });
};

export const deleteEntryDELETE = (Constants, { entries_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries/${
      entries_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useDeleteEntryDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => deleteEntryDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Entries Decrypt', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Entries Decrypt');
        queryClient.invalidateQueries('Entries Decrypts');
      },
    }
  );
};

export const entriesDecrypted2022GET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted_2022`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useEntriesDecrypted2022GET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => entriesDecrypted2022GET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchEntriesDecrypted2022GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useEntriesDecrypted2022GET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchEntriesDecrypted2022: refetch,
  });
};

export const entriesDecryptedToday2022GET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted_today_2022`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useEntriesDecryptedToday2022GET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => entriesDecryptedToday2022GET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchEntriesDecryptedToday2022GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useEntriesDecryptedToday2022GET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchEntriesDecryptedToday2022: refetch,
  });
};

export const entriesDecryptedWeek2022GET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted_week_2022`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useEntriesDecryptedWeek2022GET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => entriesDecryptedWeek2022GET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchEntriesDecryptedWeek2022GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useEntriesDecryptedWeek2022GET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchEntriesDecryptedWeek2022: refetch,
  });
};

export const fetchEntriesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchEntriesGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchFetchEntriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchEntries: refetch });
};

export const fetchExerciseGET = (Constants, { id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchExerciseGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchExerciseGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchExercise: refetch });
};

export const fetchGuidedByCatNameGET = (Constants, { cat_name }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      cat_name ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchGuidedByCatNameGET = ({ cat_name }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      cat_name ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchGuidedByCatNameGET = ({
  children,
  onData = () => {},
  refetchInterval,
  cat_name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/${
      cat_name ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchGuidedByCatName: refetch,
  });
};

export const fetchMoodGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories_mood`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchMoodGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories_mood`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchMoodGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories_mood`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchMood: refetch });
};

export const fetchPathsGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPathsGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchFetchPathsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchPaths: refetch });
};

export const fetchPromptGET = (Constants, { categories_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get/categories/${
      categories_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPromptGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['prompt', args], () => fetchPromptGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['prompts']),
  });
};

export const FetchFetchPromptGET = ({
  children,
  onData = () => {},
  refetchInterval,
  categories_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchPromptGET(
    { categories_id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchPrompt: refetch });
};

export const fetchPromptByIDGET = (Constants, { id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get3/${id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPromptByIDGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get3/${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPromptByIDGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get3/${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchPromptByID: refetch });
};

export const fetchRandomPromptGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/fetch_random_prompt`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchRandomPromptGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['prompt', args],
    () => fetchRandomPromptGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['prompts']),
    }
  );
};

export const FetchFetchRandomPromptGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchRandomPromptGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchRandomPrompt: refetch });
};

export const fetchUserFavGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userfav`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchUserFavGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userfav`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchFetchUserFavGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userfav`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchUserFav: refetch });
};

export const fetchAllHabitsGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/fetch_all_habits`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchAllHabitsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['habits', args], () => fetchAllHabitsGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchFetchAllHabitsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchAllHabitsGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchAllHabits: refetch });
};

export const fetchBlankExerciseGET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises_blankentry`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchBlankExerciseGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['exercise', args],
    () => fetchBlankExerciseGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['exercises']),
    }
  );
};

export const FetchFetchBlankExerciseGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchBlankExerciseGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchBlankExercise: refetch });
};

export const fetchCategoryGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchCategoryGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchFetchCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/categories`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchCategory: refetch });
};

export const fetchCurrentPathCategoryGET = (Constants, { id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories/${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchCurrentPathCategoryGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories/${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchCurrentPathCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories/${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchCurrentPathCategory: refetch,
  });
};

export const fetchEntryByUserIdGET = (Constants, { user_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries/${user_id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchEntryByUserIdGET = ({ user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries/${user_id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchEntryByUserIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries/${user_id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchEntryByUserId: refetch });
};

export const fetchExercisesByGuidedmacroIdGET = (
  Constants,
  { guidedmacrofilter_id }
) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises_macrofilter/${
      guidedmacrofilter_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchExercisesByGuidedmacroIdGET = ({
  guidedmacrofilter_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises_macrofilter/${
      guidedmacrofilter_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchExercisesByGuidedmacroIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  guidedmacrofilter_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises_macrofilter/${
      guidedmacrofilter_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchExercisesByGuidedmacroId: refetch,
  });
};

export const fetchPathGET = (Constants, { ID }) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths/${ID ?? ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPathGET = ({ ID }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths/${ID ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPathGET = ({
  children,
  onData = () => {},
  refetchInterval,
  ID,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/Paths/${ID ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchPath: refetch });
};

export const fetchPathByIDGET = (Constants, { paths_new_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new/${
      paths_new_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPathByIDGET = ({ paths_new_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new/${
      paths_new_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPathByIDGET = ({
  children,
  onData = () => {},
  refetchInterval,
  paths_new_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new/${
      paths_new_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFetchPathByID: refetch });
};

export const fetchPathCategoriesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPathCategoriesGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPathCategoriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_categories`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchPathCategories: refetch,
  });
};

export const fetchPathsSortedByCategoryGET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPathsSortedByCategoryGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPathsSortedByCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchPathsSortedByCategory: refetch,
  });
};

export const fetchPromptByCategoryGET = (Constants, { categories_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get/categories/${
      categories_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPromptByCategoryGET = ({ categories_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get/categories/${
      categories_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchFetchPromptByCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  categories_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/prompts_get/categories/${
      categories_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchPromptByCategory: refetch,
  });
};

export const fetchPromptsByTheirCategoryGET = (Constants, { categories_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/multiprompts/categories/${
      categories_id ?? ''
    }/clone_0`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchPromptsByTheirCategoryGET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['prompts', args],
    () => fetchPromptsByTheirCategoryGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchFetchPromptsByTheirCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  categories_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchPromptsByTheirCategoryGET(
    { categories_id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchPromptsByTheirCategory: refetch,
  });
};

export const fetchGuidedExercisesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useFetchGuidedExercisesGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['exercises', args],
    () => fetchGuidedExercisesGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchFetchGuidedExercisesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchGuidedExercisesGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchFetchGuidedExercises: refetch,
  });
};

export const getByCategoryGET = (Constants, { category_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }?category_id=1`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetByCategoryGET = ({ category_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }?category_id=1`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchGetByCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  category_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }?category_id=1`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetByCategory: refetch });
};

export const getEntriesByDayGET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted_today`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetEntriesByDayGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => getEntriesByDayGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetEntriesByDayGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetEntriesByDayGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetEntriesByDay: refetch });
};

export const getMacroCategoriesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guidedmacrofilter`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetMacroCategoriesGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guidedmacrofilter`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchGetMacroCategoriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guidedmacrofilter`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetMacroCategories: refetch });
};

export const getQuoteGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/quotes`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetQuoteGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/quotes`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchGetQuoteGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/quotes`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetQuote: refetch });
};

export const getEntriesByWeekGET = Constants =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted_week`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetEntriesByWeekGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => getEntriesByWeekGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetEntriesByWeekGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetEntriesByWeekGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetEntriesByWeek: refetch });
};

export const getExerciseByCatNameGET = (Constants, { cat_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/categories/${
      cat_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetExerciseByCatNameGET = ({ cat_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/categories/${
      cat_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchGetExerciseByCatNameGET = ({
  children,
  onData = () => {},
  refetchInterval,
  cat_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/guided_exercises/categories/${
      cat_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetExerciseByCatName: refetch,
  });
};

export const getInspoGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/motivational_lines`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetInspoGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/motivational_lines`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchGetInspoGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/motivational_lines`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetInspo: refetch });
};

export const newEndpointGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_decrypted`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useNewEndpointGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Entries Decrypts', args],
    () => newEndpointGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchNewEndpointGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useNewEndpointGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchNewEndpoint: refetch });
};

export const pathsNewSortedByCategoryGET = (Constants, { category_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePathsNewSortedByCategoryGET = ({ category_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchPathsNewSortedByCategoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  category_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/paths_new_by_category/category_id/${
      category_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchPathsNewSortedByCategory: refetch,
  });
};

export const postEntriesEncryptedNewPOST = (
  Constants,
  {
    categories_id,
    entry_id,
    input_1,
    input_2,
    input_3,
    prompt_1,
    prompt_2,
    prompt_3,
  }
) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_example`, {
    body: JSON.stringify({
      guided_exercises_id: entry_id,
      categories_id: categories_id,
      Input_1: input_1,
      Input_2: input_2,
      Input_3: input_3,
      Prompt_1: prompt_1,
      Prompt_2: prompt_2,
      Prompt_3: prompt_3,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postPathsToEntriesEncryptedPOST = (
  Constants,
  { cat_id, input1, question }
) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_example_paths`,
    {
      body: JSON.stringify({
        pathscategories_id: cat_id,
        Path_inputs: { Question: question, Input1: input1 },
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postPromptPOST = (
  Constants,
  { cat_id, ge_id, prompt_answer, prompts_id }
) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/post_to_entries_prompt`,
    {
      body: JSON.stringify({
        guided_exercises_id: ge_id,
        categories_id: cat_id,
        prompts_id: prompts_id,
        PromptAnswer: prompt_answer,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postNamePOST = (Constants, { newname, user_id }) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/editusername/${
      user_id ?? ''
    }`,
    {
      body: JSON.stringify({ Name: newname }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postToEntriesPOST = (
  Constants,
  { guided_exercises_id, input_1, input_2, input_3 }
) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries`, {
    body: JSON.stringify({
      guided_exercises_id: guided_exercises_id,
      Input_1: input_1,
      Input_2: input_2,
      Input_3: input_3,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postToEntriesEncryptedPOST = (
  Constants,
  { exercise_number, input_1, input_2, input_3 }
) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/entries_example`, {
    body: JSON.stringify({
      guided_exercises_id: exercise_number,
      Input_1: input_1,
      Input_2: input_2,
      Input_3: input_3,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const postToEntries2022POST = (
  Constants,
  {
    dist_id,
    exercise_number,
    input_1,
    input_2,
    input_3,
    input_4,
    input_5,
    input_6,
    input_7,
    mood,
  }
) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/post_to_entries_2022`, {
    body: JSON.stringify({
      guided_exercises_id: exercise_number,
      Input_1: input_1,
      Input_2: input_2,
      Input_3: input_3,
      Input_4: input_4,
      Input_5: input_5,
      Input_6: input_6,
      Input_7: input_7,
      Mood: mood,
      distortions_id: dist_id,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const setFavsPOST = (
  Constants,
  {
    a1value,
    a2value,
    a3value,
    a4value,
    a5value,
    a6value,
    e1value,
    e2value,
    e3value,
    e4value,
    e5value,
    e6value,
    m1value,
    m2value,
    m3value,
    m4value,
    m5value,
    m6value,
    user_id,
  }
) =>
  fetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/edituserfavs/${
      user_id ?? ''
    }/`,
    {
      body: JSON.stringify({
        M1: m1value,
        M2: m2value,
        M3: m3value,
        M4: m4value,
        M5: m5value,
        M6: m6value,
        A1: a1value,
        A2: a2value,
        A3: a3value,
        A4: a4value,
        A5: a5value,
        A6: a6value,
        E1: e1value,
        E2: e2value,
        E3: e3value,
        E4: e4value,
        E5: e5value,
        E6: e6value,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const checkDailyEntriesGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/check_daily_entries`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCheckDailyEntriesGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/check_daily_entries`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  );
};

export const FetchCheckDailyEntriesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/check_daily_entries`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchCheckDailyEntries: refetch });
};

export const userInfoGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userInfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useUserInfoGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userInfo`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  });
};

export const FetchUserInfoGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:P_vkeRE-/userInfo`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['XANO_AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchUserInfo: refetch });
};
