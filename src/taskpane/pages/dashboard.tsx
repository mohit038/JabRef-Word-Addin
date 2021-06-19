import {
  IStackStyles,
  DefaultPalette,
  ISearchBoxStyles,
  Stack,
  SearchBox,
  PrimaryButton,
  ButtonType,
} from "@fluentui/react";
import React from "react";
import Header from "../components/Header";
/* global Word */

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: {} };

function Dashboard() {
  const click = async () => {
    return Word.run(async (context) => {
      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("Hello World!", Word.InsertLocation.end);
      paragraph.font.color = "black";
      paragraph.font.size = 30;
      await context.sync();
    });
  };
  return (
    <Stack styles={stackStyles}>
      <SearchBox styles={searchBoxStyles} placeholder="Search" />
      <Header logo="assets/jabref.svg" message="JabRef" title="JabRef" />
      <PrimaryButton
        className="ms-welcome__action"
        buttonType={ButtonType.hero}
        iconProps={{ iconName: "ChevronRight" }}
        onClick={click}
      >
        Cite
      </PrimaryButton>
    </Stack>
  );
}
export default Dashboard;