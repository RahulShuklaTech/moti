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

export const authLoginPOST = (Constants, { loginEmail, loginPassword }) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:UA3JttCe/auth/login`, {
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
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

export const authSignupPOST = (
  Constants,
  { name, signupEmail, signupPassword }
) =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:UA3JttCe/auth/signup`, {
    body: JSON.stringify({
      email: signupEmail,
      password: signupPassword,
      name: name,
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

export const newEndpointMeGET = Constants =>
  fetch(`https://xnld-vjkh-drol.e2.xano.io/api:UA3JttCe/auth/me`, {
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

export const useNewEndpointMeGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:UA3JttCe/auth/me`, {
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
};

export const FetchNewEndpointMeGET = ({
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
  } = useFetch(`https://xnld-vjkh-drol.e2.xano.io/api:UA3JttCe/auth/me`, {
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

  return children({ loading, data, error, refetchNewEndpointMe: refetch });
};
