import Properties from '@/components/Properties';
import PropertySearchForm from '@/components/PropertySearchForm';

export default function PropertiesPage() {

  return (
  <>
    <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col">
            <PropertySearchForm />
        </div>
    </section>
    <Properties />
  </>
  )
}

