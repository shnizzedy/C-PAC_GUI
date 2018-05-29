import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

import Content from '../components/Content';
import Header, { HeaderText, HeaderAvatar } from '../components/Header';


class ProjectPipelinesPage extends Component {

  static styles = theme => ({
  });

  render() {
    const { classes, project } = this.props;

    return (
      <div>
        <Header>
          <HeaderAvatar>{project.name[0]}</HeaderAvatar>
          <HeaderText>
            Pipelines
          </HeaderText>
        </Header>
        <Content>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match: { params: { project } } } = props
  return { project: state.main.config.projects[project] }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ProjectPipelinesPage.styles)(ProjectPipelinesPage));
