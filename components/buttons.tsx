"use client";

import * as React from "react";
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export const EditButton = () => {
  return (
    <IconButton aria-label="delete">
      <ModeEditIcon />
    </IconButton>
  );
};

export const DeleteButton = () => {
    return (
      <IconButton aria-label="delete">
        <DeleteIcon />
        </IconButton>
    );
  };