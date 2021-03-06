// @flow

import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import CloseIcon from "@material-ui/icons/Close"
import FullScreenIcon from "@material-ui/icons/Fullscreen"
import FullScreenExitIcon from "@material-ui/icons/FullscreenExit"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import { grey, blue, red } from "@material-ui/core/colors"
import { styled } from "@material-ui/core/styles"

const StyledDialogTitle = styled(DialogTitle)({
  backgroundColor: grey[100],
  borderBottom: `1px solid ${grey[300]}`,
  paddingBottom: 12,
  boxShadow: "0px 2px 3px rgba(0,0,0,0.05)"
})
const StyledDialogContent = styled(DialogContent)({
  paddingTop: 16
})
const StyledDialogActions = styled(DialogActions)({
  backgroundColor: grey[100],
  borderTop: `1px solid ${grey[300]}`
})

export default ({
  open = false,
  title,
  children,
  markdownContent,
  onClose,
  red: redOn,
  noActionBar = false,
  actions = []
}) => {
  const [fullScreen, changeFullScreen] = useState(false)
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <StyledDialogTitle>
        <Box display="flex" alignItems="center">
          <span style={{ color: redOn ? red[700] : undefined }}>{title}</span>
          <div style={{ flexGrow: 1 }} />
          <IconButton onClick={() => changeFullScreen(!fullScreen)}>
            {fullScreen ? <FullScreenExitIcon /> : <FullScreenIcon />}
          </IconButton>
          <IconButton
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Box maxWidth="90vw" minWidth={400} lineHeight={1.5}>
          {children}
        </Box>
      </StyledDialogContent>
      {!noActionBar && (
        <StyledDialogActions>
          <Button
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
          >
            <span style={{ color: grey[700], fontWeight: 500 }}>Close</span>
          </Button>
          {actions.map((action, i) => (
            <Button key={i} onClick={action.onClick}>
              <span
                style={{ color: redOn ? red[700] : blue[700], fontWeight: 500 }}
              >
                {action.text}
              </span>
            </Button>
          ))}
        </StyledDialogActions>
      )}
    </Dialog>
  )
}
