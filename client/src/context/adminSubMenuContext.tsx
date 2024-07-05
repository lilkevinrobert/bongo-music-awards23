import React, { createContext, ReactNode, useState } from "react";

interface AdminSubMenuContextProps {
  expandedSubMenu: string | null;
  setExpandedSubMenu: (id: string) => void;
}

export const AdminSubMenuContext = createContext<AdminSubMenuContextProps>({
  expandedSubMenu: null,
  setExpandedSubMenu: () => {},
});

const AdminSubMenuProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

    const subMenuClickHandler = (id: string) => {
      console.log(id)
      setExpandedSubMenu(id === expandedSubMenu ? null : id)
    }

    const contextValue: AdminSubMenuContextProps = {
      expandedSubMenu,
      setExpandedSubMenu: subMenuClickHandler,
    }

    return (
      <AdminSubMenuContext.Provider value={contextValue}>
        {children}
      </AdminSubMenuContext.Provider>
    )
}

export default AdminSubMenuProvider;
