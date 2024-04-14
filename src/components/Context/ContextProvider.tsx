import * as React from "react";

interface contextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

// export const CreateContextProvider = React.createContext<contextType>(null!);
export const CreateContextProvider = React.createContext<contextType>({} as contextType);

const ContextProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
  
  //asidebar toggle button's state management
  const [expanded, setExpanded] = React.useState<boolean>(false)

  return (
    <CreateContextProvider.Provider
      value={{
        expanded, 
        setExpanded
      }}
    >
      {children}
    </CreateContextProvider.Provider>
  );
};

export default ContextProvider;
