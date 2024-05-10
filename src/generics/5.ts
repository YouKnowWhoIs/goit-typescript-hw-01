export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserName = Record<UserRole, string>;

const RoleDescription: UserName = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
