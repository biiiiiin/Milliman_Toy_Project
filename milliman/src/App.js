import React from 'react';
import './App.css';
import { Collapse, ConfigProvider, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Resizable } from 're-resizable';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { TitleBar } from 'react-desktop/windows';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import  { style }  from './style.ts';


const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.common.black,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.common.black,
    borderTopRightRadius: theme.spacing(0),
    borderBottomRightRadius: theme.spacing(0),
    paddingRight: theme.spacing(0),
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
      fontSize : '10px'
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 13,
    fontSize : '10px'
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelText,
    ...other
  } = props;

  const styleProps = {
    '--tree-view-color':  color,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.3,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 0.7 }} />
          <Typography variant="body2"  sx={{ fontFamily : 'inherit', color : 'black', fontSize : 10}}>
            {labelText}
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
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired,
};

const Category1 = (panelStyle) => [
  {
    key: "1",
    label: "Category 1",
    children: <div>
                <Resizable
                      style={style}
                      defaultSize={{
                        width: '230', 
                        height: '277', // category 1의 시작 높이
                      }}
                      maxHeight="277" // category 1의 최대 높이
                      minHeight="46" // category 1의 최소 높이
                    >
                      <TreeView
                        sx={{ height: 277, flexGrow: 1, width: 230}}
                        defaultExpanded={['2']}
                      >
                      <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
                      <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
                        <StyledTreeItem
                          nodeId="3"
                          labelText="File 1"
                          labelIcon={InsertDriveFileIcon}
                        />
                        <StyledTreeItem
                          nodeId="4"
                          labelText="File 2"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="5"
                          labelText="File 3"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="6"
                          labelText="File 4"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="7"
                          labelText="File 5"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="8"
                          labelText="File 6"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="9"
                          labelText="File 7"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="10"
                          labelText="File 8"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="11"
                          labelText="File 9"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                          nodeId="12"
                          labelText="File 10"
                          labelIcon={InsertDriveFileIcon}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                      </StyledTreeItem>
                      </TreeView>
                </Resizable>
              </div>,
    style: panelStyle
  }
];

const Category2 = (panelStyle) => [
  {
    key: "1",
    label: "Category 2",
    children: <div style={{overflowX : 'hidden'}}>
                <TreeView
                  sx={{ height: 277, flexGrow: 1, width: 230}}
                  defaultExpanded={['2']}
                >
                  <StyledTreeItem nodeId="1" labelText="Folder 1" labelIcon={FolderIcon}/>
                  <StyledTreeItem nodeId="2" labelText="Folder 2" labelIcon={FolderIcon}>
                    <StyledTreeItem
                      nodeId="3"
                      labelText="File 1"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="4"
                      labelText="File 2"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="5"
                      labelText="File 3"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="6"
                      labelText="File 4"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="7"
                      labelText="File 5"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="8"
                      labelText="File 6"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="9"
                      labelText="File 7"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="10"
                      labelText="File 8"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="11"
                      labelText="File 9"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                    <StyledTreeItem
                      nodeId="12"
                      labelText="File 10"
                      labelIcon={InsertDriveFileIcon}
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                  </StyledTreeItem>
                </TreeView>
              </div>,
    style: panelStyle
  }
];

const App = () =>{
  const { token } = theme.useToken();
  const panelStyle = {
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return <div className="main">
  <div className="titleBar">
    <TitleBar
      title="Milliman"
      controls
      background="lightgrey"
  />
  </div>
  <div className="sider">
    <ConfigProvider
      theme={{
        token: {
          padding : '0px',
          borderRadius : 0,
          colorFillAlter : 'rgb(235, 235, 235)',
        },
      }}
    >
      <>
        <Collapse
          items= {Category1(panelStyle)}
          expandIcon={({ isActive })=> <CaretRightOutlined rotate={isActive ? 90 : 0}/>
          }
        />
        <Collapse
          items= {Category2(panelStyle)}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />
          }
          style={{...style}}
        />
      </>
    </ConfigProvider>
  </div>
  <div className="contents">
    
  </div>
</div>
}

export default App;
