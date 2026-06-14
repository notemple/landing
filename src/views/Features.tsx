import PageHero from '../components/PageHero';
import FeatureSection from '../domains/features/FeatureSection';

export default function Features() {
  return (
    <div className="space-y-12">
      <PageHero
        title={
          <>
            Pristine Features, <br /> Quiet Focus
          </>
        }
        description="A smart productivity app built specifically for quiet, distraction-free writing without unrequested visual tabs or telemetry noises."
      />
      <FeatureSection />
    </div>
  );
}
