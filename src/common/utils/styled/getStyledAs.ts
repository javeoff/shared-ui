import { Button } from "@shared/ui/components"
import styled from "styled-components";
import { TAs } from "../../types/TAs"

export const getStyledAs = (as: TAs) => {
  if (as === 'button') {
    return styled(Button).attrs({ isFullWidth: true })`
      display: flex;
      flex-direction: column;
      padding: 16px;
      height: auto;
      box-sizing: border-box;
    `
  }

  return as;
}
