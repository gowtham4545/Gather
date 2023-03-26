const {RtcTokenBuilder,RtcRole}=require('agora-access-token');


const appId='4f5f1bf38e0c440f86d3b1df203195c8';
const appCertificate='9e95450e6f7749b18cb30af425c20f90'
const t='007eJxTYJhgx1iT2RHPtd8zf27l9ultmWbsqVUC9QwJ5Tz+gbKnvyowmKSZphkmpRlbpBokm5gYpFmYpRgnGaakGRkYG1qaJltcErua3BDIyPD+7G5mRgYIBPE5GHIyy1KTMxJLGBgA5aYfFQ==';

const generateAccessToken = ()=>{
    const channelName='livechat';
    const uId=1;
    const role=RtcRole.SUBSCRIBER;
    const expireTime=3600+Math.floor(Date.now()/1000);
    const token=RtcTokenBuilder.buildTokenWithUid(appId,appCertificate,channelName,uId,role,expireTime);
    return {'token':token};
};

export default generateAccessToken;
