import { Component } from 'react';
import './App.css';
import { Collapse, ConfigProvider } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import { Resizable } from 're-resizable';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { TitleBar } from 'react-desktop/windows';

import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const { Panel } = Collapse;

///
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const styleProps = {
    '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
    '--tree-view-bg-color':
      theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  bgColorForDarkMode: PropTypes.string,
  color: PropTypes.string,
  colorForDarkMode: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};
///

// const items = [
//   {
//     key: '1',
//     label: 'category 1',
//     children: <div className='category1'>
//       <TreeView
//       aria-label="category1"
//       sx={{ maxHeight: 277, flexGrow: 1, maxWidth: 230}}
//     >
//       <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
//       <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
//         <StyledTreeItem
//           nodeId="3"
//           labelText="File 1"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="4"
//           labelText="File 2"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="5"
//           labelText="File 3"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="6"
//           labelText="File 4"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="7"
//           labelText="File 5"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="8"
//           labelText="File 6"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="9"
//           labelText="File 7"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="10"
//           labelText="File 8"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="11"
//           labelText="File 9"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="12"
//           labelText="File 10"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//       </StyledTreeItem>
//       </TreeView>
//     </div>
//   },
//   {
//     key: '2',
//     label: 'category 2',
//     children: <div className='category2'>
//       <TreeView
//       aria-label="category2"
//       sx={{ maxHeight: 277, flexGrow: 1, maxWidth: 230}}
//     >
//       <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
//       <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
//         <StyledTreeItem
//           nodeId="3"
//           labelText="File 1"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="4"
//           labelText="File 2"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="5"
//           labelText="File 3"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="6"
//           labelText="File 4"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="7"
//           labelText="File 5"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="8"
//           labelText="File 6"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="9"
//           labelText="File 7"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="10"
//           labelText="File 8"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="11"
//           labelText="File 9"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//         <StyledTreeItem
//           nodeId="12"
//           labelText="File 10"
//           labelIcon={InsertDriveFileIcon}
//           labelInfo="90"
//           color="#1a73e8"
//           bgColor="#e8f0fe"
//           colorForDarkMode="#B8E7FB"
//           bgColorForDarkMode="#071318"
//         />
//       </StyledTreeItem>
//       </TreeView>
//     </div>
//   }
// ];

const category1 = [
  {
    key: '1',
    label: 'category 1',
    children: 

    <TreeView
      aria-label="category1"
      sx={{ maxHeight: 277, flexGrow: 1, width: 230}}
    >
      <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
      <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
        <StyledTreeItem
          nodeId="3"
          labelText="File 1"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="4"
          labelText="File 2"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="5"
          labelText="File 3"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="File 4"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="File 5"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="File 6"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="9"
          labelText="File 7"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="10"
          labelText="File 8"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="11"
          labelText="File 9"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
        <StyledTreeItem
          nodeId="12"
          labelText="File 10"
          labelIcon={InsertDriveFileIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode="#071318"
        />
      </StyledTreeItem>
    </TreeView>
    
  }
];

const category2 = [
  {
    key: '1',
    label: 'category 2',
    children:  <div className='box2'></div>
    // <TreeView
    //   aria-label="category1"
    //   sx={{ maxHeight: 277, flexGrow: 1, maxWidth: 230}}
    // >
    //   <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
    //   <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
    //     <StyledTreeItem
    //       nodeId="3"
    //       labelText="File 1"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="4"
    //       labelText="File 2"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="5"
    //       labelText="File 3"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="6"
    //       labelText="File 4"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="7"
    //       labelText="File 5"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="8"
    //       labelText="File 6"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="9"
    //       labelText="File 7"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="10"
    //       labelText="File 8"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="11"
    //       labelText="File 9"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //     <StyledTreeItem
    //       nodeId="12"
    //       labelText="File 10"
    //       labelIcon={InsertDriveFileIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //       colorForDarkMode="#B8E7FB"
    //       bgColorForDarkMode="#071318"
    //     />
    //   </StyledTreeItem>
    // </TreeView>
  }
];

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isMaximized: true };
  }

  close = () => console.log('close');
  minimize = () => console.log('minimize');
  toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

  render(){
    return <div className="main">
      <div className="titleBar">
        <TitleBar
          title="Milliman"
          controls
          isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background="lightgrey"
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
      />
      </div>
      <div className="sider">
        <ConfigProvider
          theme={{
            token: {
              padding : '0px',
              borderRadius : 0,
              colorFillAlter : 'rgb(235, 235, 235)',
              lineWidth : 0,
              lineHeight : '23px'
            },
          }}
        >
          <>
            <Collapse
              items={[
                    {
                      key: '1',
                      label: 'Category 1',
                      children: <TreeView
                      aria-label="category1"
                      sx={{ maxHeight: 277, flexGrow: 1, width: 230}}
                    >
                      <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
                      <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
                        <StyledTreeItem
                          nodeId="3"
                          labelText="File 1"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="4"
                          labelText="File 2"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="5"
                          labelText="File 3"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="6"
                          labelText="File 4"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="7"
                          labelText="File 5"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="8"
                          labelText="File 6"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="9"
                          labelText="File 7"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="10"
                          labelText="File 8"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="11"
                          labelText="File 9"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="12"
                          labelText="File 10"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                      </StyledTreeItem>
                              </TreeView>,
                    },
                ]}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            />
            <Collapse
              items={[
                    {
                      key: '1',
                      label: 'Category 2',
                      children: <TreeView
                      aria-label="category1"
                      sx={{ maxHeight: 277, flexGrow: 1, width: 230}}
                    >
                      <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
                      <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
                        <StyledTreeItem
                          nodeId="3"
                          labelText="File 1"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="4"
                          labelText="File 2"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="5"
                          labelText="File 3"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="6"
                          labelText="File 4"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="7"
                          labelText="File 5"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="8"
                          labelText="File 6"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="9"
                          labelText="File 7"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="10"
                          labelText="File 8"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="11"
                          labelText="File 9"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                        <StyledTreeItem
                          nodeId="12"
                          labelText="File 10"
                          labelIcon={InsertDriveFileIcon}
                          labelInfo="90"
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                          colorForDarkMode="#B8E7FB"
                          bgColorForDarkMode="#071318"
                        />
                      </StyledTreeItem>
                    </TreeView>,
                    },
                ]}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            />
          </>
        </ConfigProvider>
      </div>
      <div className="contents">
        
      </div>
    </div>
  }
}

export default App;
