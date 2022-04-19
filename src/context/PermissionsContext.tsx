import React, {createContext, useState} from 'react';
import {PermissionStatus} from 'react-native-permissions';

export interface PermissionState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionState;
  askLocationPermision: () => void;
  checkLocationPermision: () => void;
};

export const PermisionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const askLocationPermision = () => {};
  const checkLocationPermision = () => {};

  const [permissions, setPermissions] = useState(permissionsInitState);

  return (
    <PermisionsContext.Provider
      value={{permissions, askLocationPermision, checkLocationPermision}}>
      {children}
    </PermisionsContext.Provider>
  );
};
