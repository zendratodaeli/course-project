import {
  GROUP_PAGE_MENU,
  GroupMenuProps,
  LANDING_PAGE_MENU,
  MenuProps,
} from "./menus"

type ZendDaeConstantsProps = {
  landingPageMenu: MenuProps[]
  // signUpForm: AuthFormProps[]
  // signInForm: AuthFormProps[]
  // groupList: GroupListProps[]
  // createGroupPlaceholder: CreateGroupPlaceholderProps[]
  // groupPageMenu: GroupMenuProps[]
}

export const ZENDDAE_CONSTANTS: ZendDaeConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  // signUpForm: SIGN_UP_FORM,
  // signInForm: SIGN_IN_FORM,
  // groupList: GROUP_LIST,
  // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
  // groupPageMenu: GROUP_PAGE_MENU,
}
