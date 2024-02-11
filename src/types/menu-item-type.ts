import {
    MenuDividerType,
    MenuItemGroupType,
    MenuItemType,
    SubMenuType,
} from 'antd/lib/menu/hooks/useItems';

export type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType | null;
