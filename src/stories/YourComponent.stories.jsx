import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { YourComponent } from "./YourComponent";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "YourComponent",
  component: YourComponent,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    title: "this is title",
  },
};
