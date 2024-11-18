import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import React from "react";

const ProjectModal = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <Typography variant="body1">{project.modalDescription}</Typography>
        <Button
          sx={{ marginTop: "10px", color: "white", cursor: "pointer" }}
          onClick={() => window.open(project.link, "_blank")}
        >
          View
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
