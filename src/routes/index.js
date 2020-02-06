import async from "../components/Async";

import {
  Bell as Bellicon,
  BookOpen as BookOpenIcon,
  Calendar as CalendarIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon, 
  List as ListIcon,
  Monitor as MonitorIcon,
  Sliders as SlidersIcon,
  Users as UsersIcon
} from "react-feather";

// Landing
import Landing from "../pages/landing/Landing";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import StepOne from "../pages/auth/StepOne";
import StepOneWip from "../pages/auth/StepOneWip";
import StepTwo from "../pages/auth/StepTwo";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";


// Layouts
/*import Boxed from "../pages/layouts/Boxed";
import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
import SidebarSticky from "../pages/layouts/SidebarSticky";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeCorporate from "../pages/layouts/ThemeCorporate";
import ThemeModern from "../pages/layouts/ThemeModern";*/

// Misc
import Blank from "../pages/misc/Blank";

// UI Elements
import Alerts from "../pages/ui-elements/Alerts";
import Buttons from "../pages/ui-elements/Buttons";
import Cards from "../pages/ui-elements/Cards";
import Carousel from "../pages/ui-elements/Carousel";
import EmbedVideo from "../pages/ui-elements/EmbedVideo";
import General from "../pages/ui-elements/General";
import Grid from "../pages/ui-elements/Grid";
import Modals from "../pages/ui-elements/Modals";
import Tabs from "../pages/ui-elements/Tabs";
import Typography from "../pages/ui-elements/Typography";

// Notifications
import Notifications from "../pages/notifications/Notifications";

//Guidance
const StepOneInputs = async(() => import("../pages/guidance/StepOneInputs"));

// Forms
const Layouts = async(() => import("../pages/forms/Layouts"));
const BasicInputs = async(() => import("../pages/forms/BasicInputs"));
const AdvancedInputs = async(() => import("../pages/forms/AdvancedInputs"));
const InputGroups = async(() => import("../pages/forms/InputGroups"));
const Editors = async(() => import("../pages/forms/Editors"));
const Validation = async(() => import("../pages/forms/Validation"));
const Wizard = async(() => import("../pages/forms/Wizard"));

// Tables
const BootstrapTables = async(() => import("../pages/tables/Bootstrap"));
const PaginationTables = async(() => import("../pages/tables/Pagination"));
const RowSelectionTables = async(() => import("../pages/tables/RowSelection"));
const ExportCsvTables = async(() => import("../pages/tables/ExportCsv"));
const ExpandableRowsTables = async(() =>
  import("../pages/tables/ExpandableRows")
);

// Icons
const FontAwesome = async(() => import("../pages/icons/FontAwesome"));
const Feather = async(() => import("../pages/icons/Feather"));

// Calendar
const Calendar = async(() => import("../pages/calendar/Calendar"));



// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboards",
  header: "Pages",
  badgeColor: "primary",
  badgeText: "5",
  icon: SlidersIcon,
  containsHome: true,
  children: [
  ]
};

const pageRoutes = {
  path: "/pages",
  name: "Pages",
  icon: LayoutIcon,
  children: [
   {
      path: "/pages/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

const guidanceRoutes = {
  path : '/guidance',
  children : [
    {
      path : "/guidance/step-one",
      name : "Step One",
      component : StepOneInputs
    }
  ]
}

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "Special",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
      },
    {
        path: "/auth/step-one",
        name: "Step One",
        component: StepOne
      },
      {
          path: "/auth/step-one-wip",
          name: "Step One Work in Progress",
          component: StepOneWip
      },
      {
          path: "/auth/step-two",
          name: "Step One",
          component: StepTwo
      },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

const layoutRoutes = {
  path: "/layouts",
  name: "Layouts",
  icon: MonitorIcon,
  children: [

  ]
};

const documentationRoutes = {
  path: "/docs",
  name: "Documentation",
  icon: BookOpenIcon,
  children: [
   ]
};

const uiRoutes = {
  path: "/ui",
  name: "UI Elements",
  header: "Tools & Components",
  icon: GridIcon,
  children: [
    {
      path: "/ui/alerts",
      name: "Alerts",
      component: Alerts
    },
    {
      path: "/ui/buttons",
      name: "Buttons",
      component: Buttons
    },
    {
      path: "/ui/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/ui/carousel",
      name: "Carousel",
      component: Carousel
    },
    {
      path: "/ui/embed-video",
      name: "Embed Video",
      component: EmbedVideo
    },
    {
      path: "/ui/general",
      name: "General",
      component: General,
      badgeColor: "info",
      badgeText: "10+"
    },
    {
      path: "/ui/grid",
      name: "Grid",
      component: Grid
    },
    {
      path: "/ui/modals",
      name: "Modals",
      component: Modals
    },
    {
      path: "/ui/tabs",
      name: "Tabs",
      component: Tabs
    },
    {
      path: "/ui/typography",
      name: "Typography",
      component: Typography
    }
  ]
};

const iconRoutes = {
  path: "/icons",
  name: "Icons",
  icon: HeartIcon,
    badgeColor: "info",

  badgeText: "1500+",
  children: [
    {
      path: "/icons/feather",
      name: "Feather",
      component: Feather
    },
    {
      path: "/icons/font-awesome",
      name: "Font Awesome",
      component: FontAwesome
    }
  ]
};


const formRoutes = {
  path: "/forms",
  name: "Forms",
  icon: CheckSquareIcon,
  children: [
    {
      path: "/forms/layouts",
      name: "Layouts",
      component: Layouts
    },
    {
      path: "/forms/basic-inputs",
      name: "Basic Inputs",
      component: BasicInputs
    },
    {
      path: "/forms/input-groups",
      name: "Input Groups",
      component: InputGroups
    }
  ]
};

const tableRoutes = {
  path: "/tables",
  name: "Tables",
  icon: ListIcon,
  component: BootstrapTables,
  children: null
};

const formPluginsRoutes = {
  path: "/form-plugins",
  name: "Form Plugins",
  icon: CheckSquareIcon,
  header: "Plugin & Addons",
  children: [
    {
      path: "/form-plugins/advanced-inputs",
      name: "Advanced Inputs",
      component: AdvancedInputs
    },
    {
      path: "/form-plugins/editors",
      name: "Editors",
      component: Editors
    },
    {
      path: "/form-plugins/validation",
      name: "Validation",
      component: Validation
    },
    {
      path: "/form-plugins/wizard",
      name: "Wizard",
      component: Wizard
    }
  ]
};

const advancedTablesRoutes = {
  path: "/advanced-tables",
  name: "Advanced Tables",
  icon: ListIcon,
  children: [
    {
      path: "/advanced-tables/pagination",
      name: "Pagination",
      component: PaginationTables
    },
    {
      path: "/advanced-tables/row-selection",
      name: "Row Selection",
      component: RowSelectionTables
    },
    {
      path: "/advanced-tables/expandable-rows",
      name: "Expandable Rows",
      component: ExpandableRowsTables
    },
    {
      path: "/advanced-tables/export-csv", 
      name: "Export CSV",
      component: ExportCsvTables
    }
  ]
};


const notificationsRoutes = {
  path: "/notifications",
  name: "Notifications",
  icon: Bellicon,
  component: Notifications,
  children: null
};

const calendarRoutes = {
  path: "/calendar",
  name: "Calendar",
  icon: CalendarIcon,
  component: Calendar,
  children: null
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  pageRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  iconRoutes,
  formRoutes,
  tableRoutes,
  formPluginsRoutes,
  advancedTablesRoutes,
  notificationsRoutes,
  calendarRoutes,
  privateRoutes
];

// Landing specific routes
export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes, guidanceRoutes];

// All routes
export default [
  dashboardRoutes,
  pageRoutes,
  authRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  iconRoutes,
    formRoutes,
    guidanceRoutes,
  tableRoutes,
  formPluginsRoutes,
  advancedTablesRoutes,
  //chartRoutes,
  notificationsRoutes,
 // mapRoutes,
  calendarRoutes
];
