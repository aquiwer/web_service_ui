import { Switch, Route } from "wouter";
import { Matches } from "../../components/Matches";
import { AddMatch } from "../../pages/AddMatch.page";
import { Routes } from "../enums/Router.enums";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path={Routes.ADD_MATCH} component={AddMatch}/>
            <Route path={Routes.MATCHES} component={Matches}/>
        </Switch>
    )
}