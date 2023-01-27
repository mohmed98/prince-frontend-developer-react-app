import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import capsule from '../images/capsule.jpg';
import { CapsuleDetailsLoader } from './skeletonLoaders';


export default function CapsuleDetails({
  open,
  handleClose,
  capsuleInfo,
  isLoading,
  loadingFailed
}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="capsule-details-title"
        aria-describedby="capsule-details-description"
      >
        <DialogTitle id="alert-dialog-title">
          Capsule Details
        </DialogTitle>

        <DialogContent sx={{ width: '500px' }}>
          {loadingFailed && (<span>Loading details failed</span>)}
          {isLoading && (<CapsuleDetailsLoader />)}
          {!isLoading && !loadingFailed && (
            <Card sx={{ Width: '100%' }}>
              <CardMedia
                sx={{ height: 340 }}
                component="img"
                src={capsule}
                title="capsule"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {capsuleInfo?.capsule_serial}
                </Typography>
                <Typography gutterBottom variant="overline" component="span">
                  Launched On: {capsuleInfo?.original_launch ? moment(capsuleInfo?.original_launch).format('lll') : 'unknown'}
                </Typography>
                <div>
                  Missions: {capsuleInfo?.missions.length}
                  {capsuleInfo?.missions.map((mission, i) => {
                    return (
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        key={`mi-${i}`}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Name: {mission.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Flight: {mission.flight}
                        </Typography>
                      </Stack>
                    )
                  })}
                </div>

                <Typography mt={1} variant="body1" color="text.secondary">
                  {capsuleInfo?.details}
                </Typography>
              </CardContent>
            </Card>
          )
          }
        </DialogContent>

        <DialogActions sx={{ padding: '15px' }}>
          <Button variant="outlined" size="small" color='error' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}