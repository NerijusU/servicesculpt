import Moon from '@/components/svgs/Moon';
import Sun from '@/components/svgs/Sun';
import Cog from '@/components/svgs/Cog';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const grapefruit: string = '#ff855b';
const peach: string = '#FF9661';
const butterscotch: string = '#FFB25C';
const banana: string = '#F6D046';
const kiwi: string = '#EFDC34';
const lime: string = '#D4DC38';
const guacomole: string = '#A7DE59';
const avocado: string = '#74E281';
const brokkoli: string = '#4DE0AF';
const lettuce: string = '#4AD9CD';
const skyBlueLight: string = '#4DD1E0';
const denimSky: string = '#84B0F5';
const softDenim: string = '#95A5F3';
const lavenderDenim: string = '#A49DF1';

export const colors = [
  grapefruit,
  peach,
  butterscotch,
  banana,
  kiwi,
  lime,
  guacomole,
  avocado,
  brokkoli,
  lettuce,
  skyBlueLight,
  denimSky,
  softDenim,
  lavenderDenim,
];
const Settings = () => {
  const { setTheme, theme } = useTheme();

  // const blue: string = '#2563eb';
  // const red: string = '#ff0000';
  // const purple: string = '#877eff';
  // const green: string = '#16a34a';
  // const yellow: string = '#facc15';

  return (
    <div className="common-container">
      <div className="flex gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'bg-primary' : ''}
        >
          <Moon
            className={`h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'invert-white' : ''}`}
          />
          <span className="sr-only">Dark</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'bg-primary' : ''}
        >
          <Sun
            className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'invert-white' : ''}`}
          />
          <span className="sr-only">Light</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'bg-primary' : ''}
        >
          <Cog
            className={`h-[1.2rem] w-[1.2rem] ${theme === 'system' ? 'invert-white' : ''}`}
          />
          <span className="sr-only">System</span>
        </Button>
      </div>
      <div>
        {colors.map(color => (
          <Button
            key={color}
            className="rounded-full m-2"
            style={{ backgroundColor: color }}
            variant="outline"
            size="icon"
            onClick={() => updatePrimaryColor(color)}
          ></Button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
function updatePrimaryColor(newColor: string) {
  sessionStorage.setItem('primaryColor', newColor);
  document.documentElement.style.setProperty('--primary', newColor);
}
