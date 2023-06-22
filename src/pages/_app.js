import React from "react";
import AuthPage from "./auth";
import ListSkusPage from "./listskus";
import ListSellPage from "./listsell";
import ListUserPage from "./listuser";
import IndexPage from "./index";
import RealizadasPage from "./realizadas";
import ActivasPage from "./activas";
import PagePage from "./page";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import NewreservaPage from "./newreserva";
import { Switch, Route, Router } from "./../util/router";
import PurchasePage from "./purchase";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import "./../util/analytics";
import Chat from "./../components/Chat";
import { AuthProvider } from "./../util/auth";
import { ThemeProvider } from "./../util/theme";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <Chat />
          <Router>
            <Switch>
              <Route exact path="/auth/:type" component={AuthPage} />

              <Route exact path="/listSkus" component={ListSkusPage} />

              <Route exact path="/listSell" component={ListSellPage} />

              <Route exact path="/listUser" component={ListUserPage} />

              <Route exact path="/" component={IndexPage} />

              <Route exact path="/realizadas" component={RealizadasPage} />

              <Route exact path="/activas" component={ActivasPage} />

              <Route exact path="/page" component={PagePage} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/faq" component={FaqPage} />

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/pricing" component={PricingPage} />

              <Route exact path="/dashboard" component={DashboardPage} />

              <Route exact path="/settings/:section" component={SettingsPage} />

              <Route exact path="/legal/:section" component={LegalPage} />

              <Route exact path="/newreserva" component={NewreservaPage} />

              <Route exact path="/purchase/:plan" component={PurchasePage} />

              <Route
                exact
                path="/firebase-action"
                component={FirebaseActionPage}
              />

              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
