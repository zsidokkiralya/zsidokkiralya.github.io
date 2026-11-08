export type Project = {
  title: string;
  url: string;
};

export type SocialLink = {
  title: string;
  url: string;
};

export const site = {
  domain: 'https://zsidokkiralya.github.io',
  name: 'zsk',
  headline: 'sysadmin // sometimes a developer // :3',
  about: 'avid wrongdoer of exactly nothing :3',
  projects: [
    { title: 'BeatCloud', url: 'https://beatcloud.hu' },
    { title: 'DMann', url: 'https://bot.dunkelmann.hu' },
    { title: 'SkyWave', url: 'https://dc.skywave.hu' }
  ] satisfies Project[],
  socials: [
    { title: 'github', url: 'https://github.com/zsidokkiralya' },
    { title: 'steam', url: 'https://steamcommunity.com/id/zsidokkiralya' }
  ] satisfies SocialLink[]
};
