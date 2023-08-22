import {Fragment, ReactNode} from "react";
import {PageContainerSC} from "./styles/PageContainerSC";

const FullPageLayout = (props: { children?: ReactNode }) => (
    <Fragment>
        <PageContainerSC>{props.children}</PageContainerSC>
    </Fragment>
);


export default FullPageLayout