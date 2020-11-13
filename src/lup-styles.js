import { css } from "lit-element";

export const lupStyles = css`
  button {
    background-color: #fff;
    height: 48px;
    border: none;
    line-height: 48px;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    text-transform: uppercase;
  }
  img.icon,
  i.icon {
    padding: 0;
    height: 24px;
    width: 24px;
  }
  .tabs > div {
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }
  .tabs > .iron-selected {
    border-bottom: var(--rzz-primary) solid 2px;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .flex {
    flex: 1;
  }
  .flex2 {
    flex: 2;
  }
  .flex3 {
    flex: 3;
  }
  h1 {
    margin: 16px 0;
    color: #212121;
    font-size: 22px;
  }
  h2 {
    margin: 2px;
    font-style: italic;
    font-size: 1.2em;
  }
  h3 {
    height: 22px;
    line-height: 22px;
    margin: 2px;
    font-style: italic;
    font-size: 1.1em;
    padding: 2px;
    padding-left: 12px;
    border-left: solid 4px var(--rzz-primary);
    color: #212121;
    font-weight: 400;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .bg-prim {
    color: #fff;
    background-color: var(--rzz-primary);
  }
  .bg-seco {
    color: #fff;
    background-color: var(--rzz-secondary);
  }
  .bg-thir {
    color: #fff;
    background-color: var(--rzz-third);
  }
  .bg-error {
    color: #fff;
    background-color: var(--rzz-error);
    --mdc-theme-primary: var(--rzz-error);
  }
  .bg-warning {
    color: #fff;
    background-color: var(--rzz-warning);
  }
  .bg-silver {
    color: #fff;
    background-color: var(--rzz-silver);
  }
  .bg-gold {
    color: #fff;
    background-color: var(--rzz-gold);
  }
  .prim {
    color: var(--rzz-primary);
  }
  .seco {
    color: var(--rzz-secondary);
  }
  .thir {
    color: var(--rzz-third);
  }
  .error {
    color: var(--rzz-error);
  }
  .warning {
    color: var(--rzz-warning);
  }
  .silver {
    color: var(--rzz-silver);
  }
  .gold {
    color: var(--rzz-gold);
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .left {
    text-align: left;
  }
  .little {
    height: 12px;
    line-height: 12px;
    font-size: 0.6em;
  }
  .italic {
    font-style: italic;
  }
  [hidden] {
    display: none;
  }
  [invisible] {
    visibility: hidden;
  }
`;
