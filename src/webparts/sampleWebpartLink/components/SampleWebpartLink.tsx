import * as React from 'react';
import { Panel } from '@fluentui/react/lib/Panel';

import { ISampleWebpartLinkProps } from './ISampleWebpartLinkProps';

// import { escape } from '@microsoft/sp-lodash-subset';
// import styles from './SampleWebpartLink.module.scss';

interface ISampleWebpartLinkState {
  isOpen: boolean;
}

export default class SampleWebpartLink extends React.Component<ISampleWebpartLinkProps, ISampleWebpartLinkState> {
  public constructor(props: ISampleWebpartLinkProps) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openPanel = this.openPanel.bind(this);
    this.dismissPanel = this.dismissPanel.bind(this);
    this.openPanelButton = this.openPanelButton.bind(this);
  }

  private openPanel(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    console.log("openPanel");
    this.setState({
      isOpen: true
    });
  }

  private dismissPanel(): void {
    console.log("dismissPanel");
    this.setState({
      isOpen: false
    });
  }

  private openAlert(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    console.log("openAlert");
    alert("test");
  }

  private openPanelButton(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    console.log("openPanelButton");
    this.setState({
      isOpen: true
    });
  }

  public render(): React.ReactElement<ISampleWebpartLinkProps> {
    return (
      <div>
        <div>
          <a href="#" onClick={this.openPanel} data-interception="off">Click to open in panel</a>
        </div>
        <div>
          <a href="#" onClick={this.openAlert} data-interception="off">Click to alert</a>
        </div>
        <div>
          <button onClick={this.openPanelButton}>Open Panel</button>
        </div>

        <Panel
          headerText="Sample panel"
          isOpen={this.state.isOpen}
          onDismiss={this.dismissPanel}
          closeButtonAriaLabel="Close"
        >
          <p>Content goes here.</p>
        </Panel>
      </div>
    );

    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    // } = this.props;

    // return (
    //   <section className={`${styles.sampleWebpartLink} ${hasTeamsContext ? styles.teams : ''}`}>
    //     <div className={styles.welcome}>
    //       <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
    //       <h2>Well done, {escape(userDisplayName)}!</h2>
    //       <div>{environmentMessage}</div>
    //       <div>Web part property value: <strong>{escape(description)}</strong></div>
    //     </div>
    //     <div>
    //       <h3>Welcome to SharePoint Framework!</h3>
    //       <p>
    //         The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
    //       </p>
    //       <h4>Learn more about SPFx development:</h4>
    //       <ul className={styles.links}>
    //         <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
    //         <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
    //         <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
    //         <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
    //         <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
    //         <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
    //         <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
    //       </ul>
    //     </div>
    //   </section>
    // );
  }
}
