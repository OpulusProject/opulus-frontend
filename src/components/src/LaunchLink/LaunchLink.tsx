import React from 'react';
import {
  PlaidLinkError,
  PlaidLinkOnEvent,
  PlaidLinkOnEventMetadata,
  PlaidLinkOnExit,
  PlaidLinkOnExitMetadata,
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata,
  PlaidLinkOptionsWithLinkToken,
  PlaidLinkStableEvent,
  usePlaidLink,
} from 'react-plaid-link';

import { useLinkToken } from '@/hooks/plaid/useLinkToken';

interface LaunchLinkProps {
  itemId?: number | null;
  onClose: () => void;
}

export const LaunchLink: React.FC<LaunchLinkProps> = ({ itemId, onClose }) => {
  const {
    data: tokenData,
    isError: isLinkTokenError,
    isSuccess: isLinkTokenSuccess,
  } = useLinkToken();

  const onSuccess: PlaidLinkOnSuccess = (
    publicToken: string,
    metadata: PlaidLinkOnSuccessMetadata
  ) => {
    onClose();

    // todo: log metadata here properly
    console.log(metadata);
    if (itemId) {
      // todo: update mode - no need to exchange public token
    }
  };

  const onExit: PlaidLinkOnExit = (
    error: PlaidLinkError | null,
    metadata: PlaidLinkOnExitMetadata
  ) => {
    onClose();

    // todo: log properly
    console.log(error, metadata);
  };

  const onEvent: PlaidLinkOnEvent = (
    eventName: PlaidLinkStableEvent | string,
    metadata: PlaidLinkOnEventMetadata
  ) => {
    // todo: log properly
    console.log(eventName, metadata);
  };

  const config: PlaidLinkOptionsWithLinkToken = {
    onSuccess,
    onExit,
    onEvent,
    token: null,
  };

  if (isLinkTokenSuccess) {
    config.token = tokenData.linkToken;
  }

  console.log(config, 'config');

  const { open, ready } = usePlaidLink(config);

  if (isLinkTokenError) {
    console.log('Failed to create link token.');
    return null;
  }

  if (ready) {
    open();
  }

  return null;
};
