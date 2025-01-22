import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/dashboard/dashboard.tsx"),
  ...prefix("auth", [
    layout("./routes/auth/layout.tsx", [
      route("login", "./routes/auth/login.tsx"),
      route("register", "./routes/auth/register.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
