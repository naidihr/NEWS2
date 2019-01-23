# NEWS2

NEWS2 is the latest version of the National Early Warning Score (NEWS), first produced in 2012 and updated in December 2017, which advocates a system to standardise the assessment and response to acute illness.

## Sample Chart

This repository contains a sample NEWS2 chart render that can be used to populate NEWS2 observation data via json. The chart validates the NEWS score total, and recalculates the score if the patient is switched to use the hypercapnic oxygen saturation scale.

[Demonstration NEWS2 Chart](https://naidihr.github.io/NEWS2/chart.html)

## How NEWS works
The NEWS is based on a simple aggregate scoring system in which a score is allocated to physiological measurements, already recorded in routine practice, when patients present to, or are being monitored in hospital. Six simple physiological parameters form the basis of the scoring system:

1. respiration rate
1. oxygen saturation
1. systolic blood pressure
1. pulse rate
1. level of consciousness or new confusion*
1. temperature.

*The patient has new-onset confusion, disorientation and/or agitation, where previously their mental state was normal – this may be subtle. The patient may respond to questions coherently, but there is some confusion, disorientation and/or agitation. This would score 3 or 4 on the GCS (rather than the normal 5 for verbal response), and scores 3 on the NEWS system.*

A score is allocated to each parameter as they are measured, with the magnitude of the score reflecting how extremely the parameter varies from the norm. The score is then aggregated and uplifted by 2 points for people requiring supplemental oxygen to maintain their recommended oxygen saturation.

This is a pragmatic approach, with a key emphasis on system-wide standardisation and the use of physiological  parameters that are already routinely measured in NHS hospitals and in prehospital care, recorded on a standardised clinical chart – the NEWS2 chart.

[National Early Warning Score (NEWS) 2](https://www.rcplondon.ac.uk/projects/outputs/national-early-warning-score-news-2)

Reproduced from: Royal College of Physicians. National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS. Updated report of a working party. London: RCP, 2017.
